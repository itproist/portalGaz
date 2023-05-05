import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Link } from 'react-router-dom';
import { pdfjs } from 'react-pdf/dist/esm/entry.webpack5';
import pdfImg from '../../../assets/pdf.png';
import PDFFile from '../../common/pdf';
import styles from './Cale.module.scss';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const CalendarPages = () => {
  return (
    <div>
      <div className={styles.btnbtntbtn}>
        <Link to="/">Вернуться назад</Link>
      </div>
      <br />
      <PDFDownloadLink document={<PDFFile />} fileName="FORM">
        <button className={styles.btn__sub}>
          <img className={styles.subdiv} src={pdfImg} />
          <p>Календарь</p>
        </button>
      </PDFDownloadLink>
    </div>
  );
};

export default CalendarPages;
