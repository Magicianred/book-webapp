/* eslint-disable no-alert, no-console */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Quagga from 'quagga';
import { valideIsbn } from '../../../services/books';
import { Video, Container, ScanMarker } from './styles';
import Logo from '../../../assets/images/logo.svg';

function Scanner({ onScan }) {
  const onDetected = (result) => {
    Quagga.offDetected(onDetected);

    const isbn = result.codeResult.code;
    alert(isbn);

    let scannerAttemps = 0;
    if (valideIsbn(isbn)) {
      alert(`isbn válido ${isbn}`);
      onScan(isbn);
    } else {
      scannerAttemps += 1;
      console.log(scannerAttemps);
    }
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

  return (
    <>
      <Video id="video" />
      <Container>
        <ScanMarker>
          <img
            src={Logo}
            alt="Marca para leitura do código"
            width="260"
            height="260"
          />
          <img
            src="../../assets/images/scan-mark.svg"
            alt="Marca para leitura do código"
            width="260"
            height="260"
          />
          <p>Aponte para o código de barras do livro</p>
          <img
            className="Logo"
            src="../../../assets/images/logo.svg"
            alt="Logo"
            width="137"
            height="69"
          />
        </ScanMarker>
      </Container>
    </>
  );
}

Scanner.propTypes = {
  onScan: PropTypes.func.isRequired,
};

export default Scanner;
