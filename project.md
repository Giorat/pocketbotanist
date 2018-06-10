# Project : “your Pocket botanist”

## Cognitive Services @unipd

**Deadline:** from 3-8 of July 2018

**Weekly plan - TODO:**

<table class="tg">
  <tr>
    <th class="tg-us36">week</th>
    <th class="tg-us36"><br>list of task of that week</th>
  </tr>
  <tr>
    <td class="tg-us36">1</td>
    <td class="tg-us36">
    select an already built dataset<br>
    manually clean extreme classes<br>
    classify with general model Clarifai (clarifai.com)<br>
    </td>
  </tr>
  <tr>
    <td class="tg-us36">2</td>
    <td class="tg-us36">classify using Custom Vision Microsoft(customvision.ai) or VM<br>
    export the PB model from VM<br>
    construct a function that loads an image base64 and give the related predicted class or class index<br>
    test accuracy with testing dataset<br><br></td>
  </tr>
  <tr>
    <td class="tg-us36">3</td>
    <td class="tg-us36">generate slight variations to all images<br>
    repeat previous steps and compare results<br></td>
  </tr>
  <tr>
    <td class="tg-us36">4</td>
    <td class="tg-us36">serve the tensorflow model with a Serverless solution -&gt; Algorithmia.com or Google Cloud Functions or AWS Lambda<br></td>
  </tr>
  <tr>
    <td class="tg-us36">5</td>
    <td class="tg-us36">build a vue single page application that load webcam, camera and let user take photos of flowers</td>
  </tr>
  <tr>
    <td class="tg-us36">6</td>
    <td class="tg-us36">create automated script to train again Custom Vision Microsoft with user submitted photos</td>
  </tr>
</table>

**Extra goals:**

- test GAN to randomize images of specific types
- turn all images to black and white to remove bias?
- port Tensorflow model to JS version https://github.com/tensorflow/tfjs-converter

  - first convert pb to Saved Model with ckpt and meta, is it possible?

- understanding more the model with Tensorboard
  - to run Tensorboard run 'tensorboard --logdir=./log', url (http://asus-ux310gio:6006/#graphs&run=.)
- understand which kind of model the microsoft team is using to build models fast in customvision
- look at Modeldepot
- classify with Tensorflow model built with Lobe
- https://greenkeeper.io/

**API call:**
https://southcentralus.api.cognitive.microsoft.com/customvision/v2.0/Training/projects/bd1adee5-8e9e-4fe2-a0d8-ea275b91e2be/iterations/e39b2666-938d-4b45-8045-2c548ba2b1ad/export

fine grained datasets -> 17 types of flowers

fine tuning

cutting the FC makes the CNN act as a feature extractor and by using really complex ones who has been trained for ages you get good results with short training time

fine di giugno - 16 june
fine di luglio - 25 july

20 june the repository and documentation and docs
27 june presentation
report of what I've done
presentation power point - 15 minutes - 10 slides

**Stats and reports:**

- Top-1 accuracy is the conventional accuracy: the model answer (the one with highest probability) must be exactly the expected answer.
- Top-2 accuracy means that any of your model 2 highest probability answers must match the expected answer.
- Top-5 accuracy means that any of your model 5 highest probability answers must match the expected answer.

**TODO:**

- use local images keys not google colab remote ones
- create Top-1 for Clarifai report
- create Top-1 and Top-2 for Tensorflow report
  - custom vision original model with many images of 6 types DATASET1
  - inception-net floydhub with images DATASET1
  - mobilenet-v2 floydhub with images DATASET1
- check if browser supporto webgl to use local tensorflow
