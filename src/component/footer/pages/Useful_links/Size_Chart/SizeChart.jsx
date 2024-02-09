import { useState } from 'react';
import './sizeChart.css';

const SizeChart = () => {
  const [activeButton, setActiveButton] = useState('button1');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div id="SizeChartOuterDiv">
      <div id="scButtonDiv">
        <button
          onClick={() => handleButtonClick('button1')}
          id="button1"
          className='scButton'
          style={{
            backgroundColor: activeButton === 'button1' ? 'black' : '#EFEFEF',
            color: activeButton === 'button1' ? 'white' : 'black',
          }}
        >
          Western
        </button>
        <button
          onClick={() => handleButtonClick('button2')}
          id="button2"
          className='scButton'
          style={{
            backgroundColor: activeButton === 'button2' ? 'black' : '#EFEFEF',
            color: activeButton === 'button2' ? 'white' : 'black',
          }}
        >
          Kaftan
        </button>
        <button
          onClick={() => handleButtonClick('button3')}
          id="button3"
          className='scButton'
          style={{
            backgroundColor: activeButton === 'button3' ? 'black' : '#EFEFEF',
            color: activeButton === 'button3' ? 'white' : 'black',
          }}
        >
          Jumpsuit
        </button>
        <button
          onClick={() => handleButtonClick('button4')}
          id="button4"
          className='scButton'
          style={{
            backgroundColor: activeButton === 'button4' ? 'black' : '#EFEFEF',
            color: activeButton === 'button4' ? 'white' : 'black',
          }}
        >
          Cotton
        </button>
      </div>
      <div id="SizeChartContent">
        {activeButton === 'button1' && <img src="https://ahika.in/cdn/shop/t/114/assets/Western_Dress_900x.jpeg?v=149398947048312608131702875512" alt='SizeChartt1' />}
        {activeButton === 'button2' && <img src="https://ahika.in/cdn/shop/t/114/assets/Kaftan_900x.jpeg?v=175786983904161201421702875512" alt='SizeChartt2' />}
        {activeButton === 'button3' && <img src="https://ahika.in/cdn/shop/t/114/assets/Jumpsuit_900x.jpeg?v=176964725009816303161702875512" alt='SizeChartt3' />}
        {activeButton === 'button4' && <img src="https://ahika.in/cdn/shop/t/114/assets/Cotton_900x.jpeg?v=95213203196207443071702875512" alt='SizeChartt4' />}
      </div>
    </div>
  );
};

export default SizeChart;
