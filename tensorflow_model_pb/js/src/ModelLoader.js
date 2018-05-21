import * as tfc from '@tensorflow/tfjs-core';
import {loadFrozenModel} from "@tensorflow/tfjs-converter/dist/executor/frozen_model";
import {IMAGE_CLASSES} from './classes';

const CURRENT_ASSETS_DIR =
    'http://127.0.0.1/edsa-github/cognitive_services/tensorflow_model_pb/js/assets/';

const MODEL_FILE_URL = 'tensorflowjs_model.pb';
const WEIGHT_MANIFEST_FILE_URL = 'weights_manifest.json';
const INPUT_NODE_NAME = 'Placeholder';
const OUTPUT_NODE_NAME = 'loss';
const PREPROCESS_DIVISOR = tfc.scalar(255 / 2);

export class ModelLoader {
    constructor() {}

    async load() {
        this.model = await loadFrozenModel(
            CURRENT_ASSETS_DIR + MODEL_FILE_URL,
            CURRENT_ASSETS_DIR + WEIGHT_MANIFEST_FILE_URL);
    }

    /**
     * dispose the model from memory when not needed anymore
     */
    dispose() {
        if (this.model) {
            this.model.dispose();
        }
    }

    /**
     * @param input un-preprocessed input Array.
     * @return The logits.
     */
    predict(input) {
        const preprocessedInput = tfc.div(
            tfc.sub(input.asType('float32'), PREPROCESS_DIVISOR),
            PREPROCESS_DIVISOR);
        const reshapedInput =
            preprocessedInput.reshape([1, ...preprocessedInput.shape]);
        return this.model.execute(
            {[INPUT_NODE_NAME]:reshapedInput}, OUTPUT_NODE_NAME);
    }

    getTopKClasses(predictions, topK) {
        const values = predictions.dataSync();
        predictions.dispose();

        let predictionList = [];
        for (let i = 0; i < values.length; i++) {
            predictionList.push({value: values[i], index: i});
        }
        predictionList = predictionList
            .sort((a, b) => {
                return b.value - a.value;
            })
            .slice(0, topK);

        return predictionList.map(x => {
            return {label: IMAGE_CLASSES[x.index], value: x.value};
        });
    }
}