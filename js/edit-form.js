import { onDocumentKeydown, onKeyStopPropagation } from './utils.js';
import { imageUploadHashtags, imageUploadTextarea } from './form-validator.js';
import { sliderBackground } from './effect-slider.js';
import { fileDownloadControl } from './effect-zoom.js';

const fileDownloadOverlay = document.querySelector('.img-upload__overlay');
const editorWindowCloseButton = document.querySelector('.img-upload__cancel');

const closeEditorWindowHandler = onDocumentKeydown(closeEditorWindow);

function openEditorWindow() {
  fileDownloadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', closeEditorWindowHandler);
  imageUploadHashtags.addEventListener('keydown', onKeyStopPropagation);
  imageUploadTextarea.addEventListener('keydown', onKeyStopPropagation);
  sliderBackground.classList.add('hidden');
}

function closeEditorWindow() {
  fileDownloadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', closeEditorWindowHandler);
  document.querySelector('.img-upload__input').value = '';
  imageUploadHashtags.removeEventListener('keydown', onKeyStopPropagation);
  imageUploadTextarea.removeEventListener('keydown', onKeyStopPropagation);
}

fileDownloadControl.addEventListener('change', () => {
  openEditorWindow();
});

editorWindowCloseButton.addEventListener('click', () => {
  closeEditorWindow();
});