import {CustomSelect} from './select/custom-select.js';
import {Form} from './form-validate/form.js';
import {uploadFile, uploadImageDrop} from './input-file/init-upload.js';

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    uploadFile();
    uploadImageDrop();
    const select = new CustomSelect();
    select.init();
    const form = new Form();
    window.form = form;
    form.init();
  });
});
