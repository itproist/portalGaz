import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFFile from '../../common/pdf';
import { pdfjs } from 'react-pdf/dist/esm/entry.webpack5';
import pdfImg from '../../../assets/pdf.png';
import styles from './SubdivisionsPages.module.scss';
import { useNavigate, Link } from 'react-router-dom';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const SubdivisionsPages = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div>
      <div className={styles.btnbtntbtn}>
        <Link to="/">Вернуться назад</Link>
      </div>
      <br />
      <PDFDownloadLink document={<PDFFile />} fileName="FORM">
        <button className={styles.btn__sub}>
          <img className={styles.subdiv} src={pdfImg} />
          <p>Подразделения</p>
        </button>
      </PDFDownloadLink>
    </div>
  );
};

export default SubdivisionsPages;
