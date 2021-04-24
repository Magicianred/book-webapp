/* eslint-disable no-alert, no-console */
import React, { useEffect } from 'react';
import Quagga from 'quagga';

import { Video } from './styles';

function Main() {
  const onDetected = (result) => {
    Quagga.offDetected(onDetected);

    const isbn = result.codeResult.code;
    alert(isbn);
  };

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      Quagga.init(
        {
          inputStream: {
            name: 'Live',
            type: 'LiveStream',
            target: document.querySelector('#video'),
            constraints: {
              facingMode: 'environment',
            },
          },
          numOfWorkers: 1,
          locate: true,
          decoder: {
            readers: ['ean_reader'],
          },
        },
        (error) => {
          if (error) {
            console.error(error);
            alert('Erro ao abrir a câmera do dispositivo');
            return;
          }
          Quagga.start();
        },
        Quagga.onDetected(onDetected)
      );
    }
  }, []);

  return <Video id="video" />;
}

export default Main;
