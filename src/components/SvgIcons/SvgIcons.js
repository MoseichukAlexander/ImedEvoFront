import React from 'react'

const MenuButton = (props) => (
  <button style={{
    backgroundColor: 'transparent',
    border: 'none',
    position: 'absolute',
    top: '31px',
    right: '40px',
    zIndex: '20'
  }} {...props} className="menu-button">
    <svg
      x="0px"
      y="0px"
      width="40px"
      height="40px"
      viewBox="0 0 124 124"
      style={{enableBackground: 'new 0 0 124 124'}}>
        <path style={{fill: '#5bb3e3'}}
          d="M112,6H12C5.4,6,0,11.4,0,18s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,6,112,6z"/>
        <path style={{fill: '#5bb3e3'}}
         d="M112,50H12C5.4,50,0,55.4,0,62c0,6.6,5.4,12,12,12h100c6.6,0,12-5.4,12-12C124,55.4,118.6,50,112,50z"/>
        <path style={{fill: '#5bb3e3'}}
         d="M112,94H12c-6.6,0-12,5.4-12,12s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,94,112,94z"/>
    </svg>
  </button>
)

const CloseButton = (props) => (
  <button style={{
    backgroundColor: 'transparent',
    border: 'none',
    position: 'absolute',
    top: '15px',
    right: '20px',
    zIndex: '20'
  }} {...props} className="menu-button">
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 64 64"
      style={{enableBackground: 'new 0 0 64 64'}}>
      <g>
        <g style={{fill: '#ffffff'}}>
          <path
            d="m46.355,17.979c-0.779-0.78-2.043-0.78-2.821,0l-11.594,11.591-11.591-11.591c-0.779-0.78-2.044-0.78-2.822,
            0-0.778,0.779-0.778,2.043 0,2.823l11.499,11.5-11.492,11.489c-0.778,0.779-0.778,2.043 0,2.822 0.392,0.391 0.903,
            0.586 1.414,0.586s1.02-0.195 1.411-0.586l11.581-11.579 11.583,11.579c0.39,0.391 0.899,0.586 1.41,0.586 0.512,0
            1.024-0.195 1.412-0.586 0.779-0.779 0.779-2.043 0-2.822l-11.489-11.488 11.499-11.5c0.78-0.781 0.78-2.044-7.10543e-15-2.824z"/>
          <path
            d="M31.94,0C14.33,0,0,14.328,0,31.941c0,17.611,14.33,31.94,31.94,31.94 c17.611,0,31.941-14.329,31.941-31.94C63.882,
            14.328,49.552,0,31.94,0z M31.94,59.89c-15.411,0-27.948-12.538-27.948-27.948 c0-15.412,12.537-27.949,27.948-27.949c15.412,
            0,27.949,12.537,27.949,27.949C59.89,47.352,47.353,59.89,31.94,59.89z"/>
        </g>
      </g>
    </svg>
  </button>
)

const IconSales = (props) => (
  <svg
    version="1.1"
    x="0px" y="0px"
    viewBox="0 0 489 489"
    style={{enableBackground: 'new 0 0 489 489'}}
    width="60px"
    height="60px">
    <path
      d="M247.298,336.8c-5.9,5.9-5.9,15.6,0,21.5s15.6,5.9,21.5,0s5.9-15.6,0-21.5C262.898,330.8,253.198,330.8,247.298,336.8z"
      data-original="#000000"
      data-old_color="#000000"
      fill="#5bb3e3"/>
    <path d="M171.998,274.9c-5.9-5.9-15.6-5.9-21.5,0s-5.9,15.6,0,21.5s15.6,5.9,21.5,0S177.898,280.9,171.998,274.9z"
          data-original="#000000"
          data-old_color="#000000"
          fill="#5bb3e3"/>
    <path d="M414.498,31c-4.7-11.4-19.1-30.6-62.9-31c-0.5,0-0.9,0-1.4,0c-26.9,0-58.9,7.1-90.4,20.1c-5.8,2.4-11.4,4.9-16.8,7.6
		l-0.3-0.3c-18-17.5-46.7-17.5-64.7,0l-88.2,85.7c-11.7,11.3-18.3,26.9-18.3,43.2v290.3c0,23.4,19,42.4,42.4,42.4h193 c23.4,0,42.4-19,42.4-42.4V156.3c0-8.3-1.7-16.5-5-23.9c18.7-10.5,35-22.5,
		47.5-35.1C422.398,66.2,419.198,42.4,414.498,31z     M124.498,285.7c0-20.2,16.5-36.7,36.7-36.7s36.7,16.5,36.7,36.7s-16.5,36.7-36.7,36.7C140.998,322.4,124.598,306,124.498,285.7z
		M155.698,381.7c-3.8-3.2-4.3-8.8-1.2-12.6l96.4-116.1c3.2-3.8,8.8-4.3,12.6-1.2c3.8,3.2,4.3,8.8,1.2,12.6l-96.4,116.1
	  C165.098,384.3,159.498,384.8,155.698,381.7z M258.098,384.3c-20.2,0-36.7-16.5-36.7-36.7s16.5-36.7,36.7-36.7
		c20.2,0,36.7,16.5,36.7,36.7C294.798,367.8,278.298,384.3,258.098,384.3z M298.798,114.7c-18.4,7.6-37.3,13-54.5,15.6
		c0,0.8,0.1,1.5,0.1,2.3c0,19.4-15.7,35.1-35.1,35.1s-35.1-15.7-35.1-35.1s15.7-35.1,35.1-35.1c11.6,0,21.8,5.6,28.2,14.2
		c16.3-2.8,33.9-7.9,51.2-15c6.1-2.5,11.8-5.1,17.2-7.8l-35.4-34.5c1-0.4,2-0.8,3-1.3c26.9-11.1,54.8-17.4,76.8-17.4
		c0.3,0,0.7,0,1,0c21.1,0.2,29,5.9,30.2,8.9C385.198,53.8,361.698,88.8,298.798,114.7z"
          data-original="#000000"
          data-old_color="#000000"
          fill="#5bb3e3"/>
  </svg>
)
const IconHeart = (props) => (
  <svg x="0px" y="0px" viewBox="0 0 484 484" style={{enableBbackground: 'new 0 0 484 484'}}
       width="60px"
       height="60px">
    <path d="M414.74,95.558c-21.512-21.516-50.12-33.364-80.544-33.364c-30.428,0-59.032,11.848-80.544,33.364l-9.044,9.044
		 l-9.044-9.044c-21.516-21.516-50.124-33.364-80.548-33.364c-30.428,0-59.032,11.848-80.544,33.364
		 c-44.416,44.408-44.416,116.672,0,161.084L236.12,418.29c2.344,2.344,5.412,3.516,8.484,3.516c3.072,0,6.14-1.172,8.492-3.512
		 L414.74,256.646c21.516-21.512,33.364-50.12,33.364-80.544C448.104,145.674,436.256,117.07,414.74,95.558z M397.768,239.674
		 l-153.16,153.164L91.444,239.674c-35.056-35.056-35.056-92.092,0-127.148c16.98-16.98,39.556-26.332,63.572-26.332
		 c24.012,0,46.592,9.352,63.576,26.332l17.528,17.528c4.688,4.688,12.28,4.688,16.968,0l17.528-17.528
		 c16.984-16.98,39.56-26.332,63.576-26.332s46.596,9.352,63.576,26.332C432.824,147.582,432.824,204.618,397.768,239.674z"
           fill="#5bb3e3"/>
    <path d="M56,213.806H12c-6.628,0-12,5.372-12,12s5.372,12,12,12h44c6.628,0,12-5.372,12-12S62.628,213.806,56,213.806z"
          fill="#5bb3e3"/>
    <path d="M431.992,214.194H317.144l-17.872-39.308c-1.348-2.972-4.284-4.78-7.624-4.684c-3.26,0.14-6.108,2.24-7.196,5.316
		l-36.528,102.936l-44.408-122.98c-1.096-3.036-3.916-5.12-7.148-5.272c-3.456-0.16-6.236,1.66-7.612,4.584l-29.84,63.408h-98.92
		c-4.42,0-8,3.584-8,8s5.264,7.612,9.684,7.612h104c3.1,0,4.236-1.4,5.556-4.204l23.788-50.548l45.452,125.86
		c1.144,3.168,4.152,5.28,7.524,5.28c0.008,0,0.016,0,0.016,0c3.38-0.008,6.388-2.14,7.516-5.324l37.376-105.332l11.804,25.964
		 c1.296,2.86,5.832,4.304,8.968,4.304h120c4.416,0,6.312-3.196,6.312-7.612S436.408,214.194,431.992,214.194z"
          fill="#5bb3e3"/>
    <path
      d="M472,209.806h-36c-6.628,0-12,5.372-12,12s5.372,12,12,12h36c6.628,0,12-5.372,12-12S478.628,209.806,472,209.806z"
      fill="#5bb3e3"/>
  </svg>
)
const IconDoctor = (props) => (
  <svg
    x="0px"
    y="0px"
    viewBox="0 0 480 480"
    style={{enableBackground: 'new 0 0 480 480'}}
    width="60px"
    height="60px">
    <rect x="327.998" y="432" width="16" height="16" data-original="#000000" data-old_color="#00B7FF" fill="#5bb3e3"/>
    <path d="M479.334,468.808l-45.16-103.56c-2.44-7.304-8.272-13.032-15.616-15.32l-116.544-36.424l-13.024-32.568l29.664-44.496
		c0.576-0.872,0.984-1.84,1.184-2.864l6.72-33.576h9.44c13.232,0,24-10.768,24-24v-32c0-13.232-10.768-24-24-24V72
		c0-22.056-17.944-40-40-40H279.19c-3.72-18.232-19.88-32-39.192-32s-35.472,13.768-39.192,32h-9.4
		c-9.072,0-17.264,5.024-21.384,13.104c-2.68,5.264-3.256,11.152-1.888,16.656c-0.104,0.032-0.208,0.04-0.304,0.072
		c-9.472,3.08-15.832,12.32-15.832,22.992V120h-8c-13.232,0-24,10.768-24,24v32c0,13.232,10.768,24,24,24h9.44l6.712,33.568
		c0.2,1.024,0.608,2,1.184,2.864l29.56,44.336l-14.832,33.32L61.43,349.92c-7.344,2.296-13.184,8.016-15.36,14.656L0.662,468.808
		c-1.072,2.472-0.832,5.328,0.648,7.576C2.782,478.64,5.302,480,7.998,480h464c2.696,0,5.208-1.36,6.696-3.616
		C480.166,474.128,480.414,471.28,479.334,468.808z M327.998,136h8c4.416,0,8,3.592,8,8v32c0,4.408-3.584,8-8,8h-8V136z
		M151.998,184h-8c-4.408,0-8-3.592-8-8v-32c0-4.408,3.592-8,8-8h8V184z M239.998,16c10.432,0,19.328,6.688,22.632,16h-45.264
		C220.67,22.688,229.566,16,239.998,16z M184.286,52.368c1.384-2.736,4.048-4.368,7.12-4.368h104.592c13.232,0,24,10.768,24,24v48
		h-18.6c-45.912,0-89.448-22.168-116.456-59.304C183.134,58.216,182.886,55.104,184.286,52.368z M167.998,120V84.824
		c0-4.592,2.576-7.056,4.784-7.776c1.576-0.512,3.896-0.52,5.984,2.352l0.376-0.272c18.44,21.832,42.32,38.168,68.864,47.6V128
		c0,4.408-3.592,8-8,8h-30.76c-5.112,0-10.112-0.96-14.848-2.864l-26.4-10.552V120z M175.534,228.88l-7.536-37.672v-51.392
		l20.448,8.176c6.64,2.664,13.64,4.008,20.8,4.008h30.752c12.056,0,21.96-8.96,23.648-20.552
		c12.256,2.984,24.92,4.552,37.752,4.552h10.6v55.208l-7.528,37.672l-29.752,44.616l-34.72,13.888l-34.728-13.896L175.534,228.88z
		M286.614,318.072l-46.616,46.616l-47.704-47.704l11.88-26.696l32.848,13.136c0.96,0.384,1.968,0.576,2.976,0.576
		s2.016-0.192,2.976-0.568L275.55,290.4L286.614,318.072z M304.206,464h-284l40.792-93.704c0.808-2.432,2.752-4.336,5.2-5.104
		l69.8-21.808v49.424c-18.232,3.72-32,19.872-32,39.192v16c0,4.416,3.584,8,8,8h16v-16h-8v-8c0-13.232,10.768-24,24-24
		s24,10.768,24,24v8h-8v16h16c4.416,0,8-3.584,8-8v-16c0-19.312-13.768-35.472-32-39.192v-54.424l28.488-8.904l53.952,52.264
		c0.536,0.52,1.176,0.824,1.8,1.16c0.272,0.152,0.504,0.392,0.792,0.512c0.944,0.384,1.952,0.584,2.968,0.584
		c2.048,0,4.096-0.784,5.656-2.344l52.576-52.576l29.768,9.304v62.424c-18.232,3.72-32,19.872-32,39.192
		C295.998,449.04,299.126,457.296,304.206,464z M335.998,464c-13.232,0-24-10.768-24-24s10.768-24,24-24s24,10.768,24,24
		S349.23,464,335.998,464z M367.79,464c5.08-6.704,8.208-14.96,8.208-24c0-19.312-13.768-35.472-32-39.192v-57.424l69.8,21.816
		c2.448,0.76,4.392,2.664,5.456,5.768L459.79,464H367.79z" data-original="#000000" data-old_color="#5bb3e3"
          fill="#5bb3e3"/>
  </svg>

)
const IconHospital = (props) => (
  <svg
    x="0px"
    y="0px"
    viewBox="0 0 480 480"
    style={{enableBackground: 'new 0 0 480 480'}}
    width="60px"
    height="60px">
    <path d="M216,136h48v-24h24V64h-24V40h-48v24h-24v48h24V136z M208,96V80h24V56h16v24h24v16h-24v24h-16V96H208z"
          data-original="#000000" fill="#0099FF"/>
    <rect x="192" y="160" width="16" height="24" data-original="#000000" fill="#5bb3e3"/>
    <rect x="272" y="160" width="16" height="24" data-original="#000000" fill="#5bb3e3"/>
    <rect x="232" y="160" width="16" height="24" data-original="#000000" fill="#5bb3e3"/>
    <rect x="312" y="160" width="16" height="24" data-original="#000000" fill="#5bb3e3"/>
    <rect x="152" y="160" width="16" height="24" data-original="#000000" fill="#5bb3e3"/>
    <rect x="64" y="304" width="16" height="24" data-original="#000000" fill="#5bb3e3"/>
    <rect x="64" y="256" width="16" height="24" data-original="#000000" fill="#5bb3e3"/>
    <rect x="64" y="208" width="16" height="24" data-original="#000000" fill="#5bb3e3"/>
    <rect x="64" y="160" width="16" height="24" data-original="#000000" fill="#5bb3e3"/>
    <rect x="64" y="352" width="16" height="24" data-original="#000000" fill="#5bb3e3"/>
    <path d="M456,432V112h-80V0H104v112H24v320H0v48h480v-48H456z M376,128h64v304h-64V128z M120,16h240v416h-64v-80H184v80h-64V16z
			M280,368v64h-32v-64H280z M232,368v64h-32v-64H232z M40,128h64v304H40V128z M464,464H16v-16h448V464z"
          fill="#5bb3e3"/>
    <rect x="400" y="304" width="16" height="24" data-original="#000000" fill="#5bb3e3"/>
    <rect x="400" y="256" width="16" height="24" data-original="#000000" fill="#5bb3e3"/>
    <rect x="400" y="208" width="16" height="24" data-original="#000000" fill="#5bb3e3"/>
    <rect x="400" y="160" width="16" height="24" data-original="#000000" fill="#5bb3e3"/>
    <rect x="400" y="352" width="16" height="24" data-original="#000000" fill="#5bb3e3"/>
    <rect x="192" y="208" width="16" height="24" data-original="#000000" fill="#5bb3e3"/>
    <rect x="272" y="208" width="16" height="24" data-original="#000000" fill="#5bb3e3"/>
    <rect x="232" y="208" width="16" height="24" data-original="#000000" fill="#5bb3e3"/>
    <rect x="312" y="208" width="16" height="24" data-original="#000000" fill="#5bb3e3"/>
    <rect x="152" y="208" width="16" height="24" data-original="#000000" fill="#5bb3e3"/>
    <rect x="192" y="256" width="16" height="24" data-original="#000000" fill="#5bb3e3"/>
    <rect x="272" y="256" width="16" height="24" data-original="#000000" fill="#5bb3e3"/>
    <rect x="232" y="256" width="16" height="24" data-original="#000000" fill="#5bb3e3"/>
    <rect x="312" y="256" width="16" height="24" data-original="#000000" fill="#5bb3e3"/>
    <rect x="152" y="256" width="16" height="24" data-original="#000000" fill="#5bb3e3"/>
    <rect x="192" y="304" width="16" height="24" data-original="#000000" fill="#5bb3e3"/>
    <rect x="272" y="304" width="16" height="24" data-original="#000000" fill="#5bb3e3"/>
    <rect x="232" y="304" width="16" height="24" data-original="#000000" fill="#5bb3e3"/>
    <rect x="312" y="304" width="16" height="24" data-original="#000000" fill="#5bb3e3"/>
    <rect x="152" y="304" width="16" height="24" data-original="#000000" fill="#5bb3e3"/>
  </svg>
)

const IconMicroScope = (props) => (
  <svg
    viewBox="0 0 511.998 511.998"
    style={{enableBackground:'new 0 0 511.998 511.998'}}
    width="60px"
    height="60px" >
		<path d="M423.21,432.435l-8.742-25.945c-0.93-2.757-1.988-5.442-3.144-8.068c31.446-26.169,49.361-64.157,49.361-105.218
		 c0-32.414-11.573-63.883-32.587-88.612c-18.266-21.495-42.68-36.82-69.642-43.92l33.702-53.283
		 c1.107-1.75,1.474-3.868,1.019-5.888c-0.455-2.02-1.693-3.777-3.443-4.884l-12.767-8.075l7.945-12.561l12.767,8.076
		 c1.295,0.818,2.739,1.21,4.165,1.21c2.588,0,5.12-1.285,6.606-3.635l16.48-26.056c1.107-1.75,1.474-3.868,1.019-5.888
		 c-0.455-2.02-1.693-3.777-3.443-4.884L353.58,1.208c-3.644-2.301-8.466-1.219-10.771,2.425l-16.48,26.056
		 c-1.107,1.75-1.473,3.868-1.019,5.888c0.455,2.02,1.693,3.777,3.443,4.884l12.767,8.075l-7.945,12.561l-12.767-8.076
		 c-3.643-2.302-8.467-1.219-10.771,2.425L197.591,233.226l-9.485-5.999c-1.75-1.106-3.868-1.474-5.889-1.018
		 c-2.02,0.455-3.777,1.692-4.884,3.443l-16.48,26.057c-2.305,3.644-1.22,8.466,2.424,10.771l101.092,63.941
		 c1.295,0.818,2.739,1.21,4.166,1.21c2.588,0,5.119-1.286,6.606-3.635l16.48-26.056c2.305-3.644,1.22-8.466-2.424-10.771
		 l-9.485-5.999l27.734-43.846c5.23-1.64,10.673-2.473,16.219-2.473c29.971,0,54.355,24.383,54.355,54.355
		 c0,22.037-13.484,41.975-33.78,50.305c-6.662-1.461-13.548-2.243-20.576-2.243H163.835c-29.328,0-53.19,23.861-53.19,53.191
		 c0,4.312,3.495,7.807,7.807,7.807h115.955c-0.543,1.393-1.064,2.798-1.546,4.226l-8.606,25.541H93.254
		 c-23.126,0-41.942,18.815-41.942,41.941v30.218c0,4.312,3.495,7.807,7.807,7.807H451.6c4.312,0,7.807-3.495,7.807-7.807v-30.219
		 C459.408,452.795,443.628,435.245,423.21,432.435z M351.832,18.578l55.73,35.249l-8.133,12.86l-12.763-8.073
		 c-0.001-0.001-0.003-0.002-0.004-0.003l-30.195-19.099c-0.002-0.001-0.005-0.003-0.007-0.004l-12.76-8.071L351.832,18.578z
		 M371.716,67.634l-7.944,12.561l-16.999-10.752l7.944-12.561L371.716,67.634z M266.119,313.051l-87.896-55.594l8.133-12.861
		 l9.474,5.993c0.003,0.002,0.006,0.005,0.011,0.007l68.926,43.596l0.001,0.001l9.482,5.998L266.119,313.051z M266.516,276.822
		 l-1.859-1.176l-53.87-34.074L319.059,70.392l12.762,8.072c0.002,0.001,0.003,0.002,0.005,0.003l30.195,19.099
		 c0.002,0.001,0.004,0.002,0.006,0.003l12.761,8.071l-35.479,56.094c0,0-0.001,0.002-0.002,0.002l-24.48,38.704L266.516,276.822z
		 M393.634,293.204c0-38.581-31.388-69.97-69.97-69.97c-1.635,0-3.264,0.056-4.884,0.169l30.617-48.407l0.25-0.395
		 c25.796,5.657,49.272,19.766,66.554,40.102c18.618,21.908,28.87,49.787,28.87,78.501c0,35.327-14.967,68.101-41.359,91.207
		 c-0.094-0.142-0.193-0.279-0.288-0.422c-0.462-0.695-0.931-1.383-1.41-2.063c-0.156-0.222-0.315-0.442-0.473-0.662
		 c-0.529-0.738-1.065-1.47-1.613-2.192c-0.083-0.108-0.168-0.216-0.251-0.324c-9.401-12.255-21.605-22.029-35.522-28.516
		 C382.295,337.3,393.634,316.135,393.634,293.204z M310.385,357.991c18.805-3.142,38.629,0.649,54.928,10.551
		 c15.998,9.719,28.382,25.195,34.359,42.933l6.927,20.557H240.732l6.927-20.557c1.557-4.621,3.518-9.018,5.813-13.178
		 c0.012-0.021,0.027-0.038,0.038-0.06c11.804-21.331,32.536-35.897,56.057-40.099C309.84,358.089,310.111,358.037,310.385,357.991z
		 M127.074,386.649c3.602-16.986,18.716-29.768,36.759-29.768h107.389c-11.635,7.608-21.586,17.73-29.03,29.768H127.074z
		 M443.794,496.384h-0.001H66.928v-22.411c0-14.517,11.81-26.326,26.327-26.326h136.608h187.605
		 c14.516,0,26.326,11.809,26.326,26.326V496.384z"
     fill="#5bb3e3"/>
		<path d="M323.664,369.369c-13.833,0-25.086,11.253-25.086,25.086c0,13.833,11.253,25.087,25.086,25.087
		s25.086-11.255,25.086-25.087C348.751,380.623,337.497,369.369,323.664,369.369z M323.664,403.929
		c-5.223,0-9.472-4.249-9.472-9.473c0-5.223,4.25-9.472,9.472-9.472c5.223,0,9.472,4.249,9.472,9.472
		 C333.136,399.68,328.887,403.929,323.664,403.929z"
     fill="#5bb3e3"/>
</svg>

)

const IconPlace = (props) => (
  <svg  x="0px" y="0px"
        width="17px" height="22px" viewBox="0 0 530.719 530.719" >
    <circle style={{fill:'#0b689a'}} cx="265.36" cy="197.619" r="89.304"/>
    <path style={{fill:'#0b689a'}} d="M265.36,530.719c0,0,197.627-223.944,197.627-333.09C462.987,88.482,374.507,0,265.36,0
C156.213,0,67.731,88.482,67.731,197.628C67.731,306.774,265.36,530.719,265.36,530.719z M265.36,61.171
c75.352,0,136.448,61.085,136.448,136.448S340.712,334.066,265.36,334.066c-75.353,0-136.447-61.085-136.447-136.447
S190.007,61.171,265.36,61.171z"/>
  </svg>
)

const IconTime = (props) => (
  <svg version="1.1" viewBox="0 0 60 60" width="17px" height="22px" >

  <path style={{fill:'#0b689a'}} d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30
S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z"/>
<path style={{fill:'#0b689a'}} d="M31,26.021V15.879c0-0.553-0.448-1-1-1s-1,0.447-1,1v10.142c-1.399,0.364-2.494,1.459-2.858,2.858H19c-0.552,0-1,0.447-1,1
s0.448,1,1,1h7.142c0.447,1.72,2,3,3.858,3c2.206,0,4-1.794,4-4C34,28.02,32.72,26.468,31,26.021z M30,31.879c-1.103,0-2-0.897-2-2
s0.897-2,2-2s2,0.897,2,2S31.103,31.879,30,31.879z"/>
<path style={{fill:'#0b689a'}} d="M30,9.879c0.552,0,1-0.447,1-1v-1c0-0.553-0.448-1-1-1s-1,0.447-1,1v1C29,9.432,29.448,9.879,30,9.879z"/>
  <path style={{fill:'#0b689a'}} d="M30,49.879c-0.552,0-1,0.447-1,1v1c0,0.553,0.448,1,1,1s1-0.447,1-1v-1C31,50.326,30.552,49.879,30,49.879z"/>
  <path style={{fill:'#0b689a'}} d="M52,28.879h-1c-0.552,0-1,0.447-1,1s0.448,1,1,1h1c0.552,0,1-0.447,1-1S52.552,28.879,52,28.879z"/>
  <path style={{fill:'#0b689a'}} d="M9,28.879H8c-0.552,0-1,0.447-1,1s0.448,1,1,1h1c0.552,0,1-0.447,1-1S9.552,28.879,9,28.879z"/>
  <path style={{fill:'#0b689a'}} d="M44.849,13.615l-0.707,0.707c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293
s0.512-0.098,0.707-0.293l0.707-0.707c0.391-0.391,0.391-1.023,0-1.414S45.24,13.225,44.849,13.615z"/>
<path style={{fill:'#0b689a'}} d="M14.444,44.021l-0.707,0.707c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293
s0.512-0.098,0.707-0.293l0.707-0.707c0.391-0.391,0.391-1.023,0-1.414S14.834,43.631,14.444,44.021z"/>
<path style={{fill:'#0b689a'}} d="M45.556,44.021c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l0.707,0.707c0.195,0.195,0.451,0.293,0.707,0.293
s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L45.556,44.021z"/>
<path style={{fill:'#0b689a'}} d="M15.151,13.615c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l0.707,0.707c0.195,0.195,0.451,0.293,0.707,0.293
s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L15.151,13.615z"/>

</svg>

)

const IconPrice = (props) => (
  <svg version="1.1" x="0px" y="0px" width="17px" height="22px"
viewBox="0 0 295 295" >
  <path style={{fill:'#0b689a'}} d="M290.156,23.89c-0.482-10.311-8.733-18.562-19.044-19.044L168.005,0.023c-5.62-0.272-11.097,1.855-15.077,5.836
L5.858,152.93C2.108,156.681,0,161.767,0,167.072s2.107,10.392,5.858,14.143l107.929,107.928c3.904,3.905,9.023,5.857,14.142,5.857
c5.118,0,10.237-1.953,14.143-5.857l147.069-147.069c3.98-3.98,6.1-9.454,5.837-15.077L290.156,23.89z M252.481,76.087
c-9.269,9.269-24.298,9.269-33.567,0s-9.269-24.298,0-33.567s24.298-9.269,33.567,0S261.751,66.817,252.481,76.087z"/>
</svg>
)

const IconFilterDoctor = (props) => (
  <svg style={{display:"block"}}  x="0px" y="0px"
  width="50px" height="50px" viewBox="0 0 291.734 291.734">
    <path style={{fill:'#0b689a'}} d="M59.294,152.691c0.531,5.888,3.845,11.428,9.391,14.534c4.604,2.579,9.349,4.475,14.196,5.759
  c-2.731,9.217-7.749,22.556-16.681,36.842c-8.484,13.577-8.585,29.961-0.267,44.957c12.254,22.1,39.312,36.951,67.341,36.951
  c19.25,0,36.364-8.865,48.185-24.964c16.896-23.017,20.64-56.985,10.009-90.846c-9.854-31.389,3.325-48.135,12.045-55.333
  c7.109,6.851,16.751,11.076,27.408,11.076c21.836,0,39.55-17.709,39.55-39.556s-17.714-39.551-39.55-39.551
  c-21.847,0-39.551,17.709-39.551,39.551c0,3.076,0.383,6.053,1.046,8.927c-16.467,12.045-35.476,39.157-22.173,81.546
  c8.389,26.729,5.815,53.939-6.727,71.018c-5.317,7.249-14.887,15.887-30.248,15.887c-19.874,0-39.566-10.486-47.882-25.492
  c-3.068-5.535-5.608-13.919-0.318-22.385c11.814-18.911,17.727-36.558,20.531-47.344c6.566-0.989,12.977-3.107,19.144-6.4
  c5.497-2.936,8.87-8.249,9.613-13.991c26.131-23.623,38.196-66.187,38.89-68.678c1.409-5.11-0.999-10.356-5.488-12.748
  c3.609-31.954-8.218-48.059-15.354-54.619c0.544-3.07-0.684-6.354-3.381-8.114L135.91,1.148c-3.425-2.237-7.731-1.108-9.608,2.537
  l-6.248,12.075c-1.882,3.646-0.223,7.534,3.708,8.694l14.825,4.37c3.759,1.108,8.262-0.688,10.39-3.982
  c5.908,6.224,14.416,20.081,11.485,46.515c-4.029,0.767-7.482,3.702-8.652,7.922c-3.562,12.785-13.85,39.193-29.125,55.028
  c-4.862-1.879-10.452-1.786-15.41,0.854c-3.229,1.725-6.387,2.594-9.628,2.662h-0.668c-3.415-0.073-6.75-1.036-10.165-2.946
  c-4.836-2.713-10.344-2.952-15.201-1.238C56.68,117.739,46.611,91.89,43.108,79.281c-1.173-4.209-4.64-7.151-8.655-7.917
  c-2.936-26.434,5.569-40.291,11.485-46.515c2.13,3.293,6.628,5.09,10.387,3.981l14.825-4.37c3.925-1.16,5.595-5.054,3.708-8.694
  L68.615,3.69c-1.882-3.646-6.188-4.774-9.608-2.537L45.881,9.729c-2.695,1.76-3.92,5.043-3.379,8.114
  c-7.125,6.561-18.962,22.659-15.351,54.618c-4.492,2.393-6.892,7.638-5.489,12.754C22.344,87.654,34.046,128.861,59.294,152.691z
  M230.921,76.661c8.522,0,15.445,6.913,15.445,15.452c0,8.533-6.923,15.451-15.445,15.451c-8.534,0-15.452-6.918-15.452-15.451
  C215.469,83.573,222.382,76.661,230.921,76.661z"/>
</svg>
)

const IconArrowDown = (props) => (
  <svg  version="1.1" x="0px" y="0px" width="10px" height="10px" viewBox="0 0 444.819 444.819" >
	<path style={{fill:'#0b689a'}} d="M434.252,114.203l-21.409-21.416c-7.419-7.04-16.084-10.561-25.975-10.561c-10.095,0-18.657,3.521-25.7,10.561
		L222.41,231.549L83.653,92.791c-7.042-7.04-15.606-10.561-25.697-10.561c-9.896,0-18.559,3.521-25.979,10.561l-21.128,21.416
		C3.615,121.436,0,130.099,0,140.188c0,10.277,3.619,18.842,10.848,25.693l185.864,185.865c6.855,7.23,15.416,10.848,25.697,10.848
		c10.088,0,18.75-3.617,25.977-10.848l185.865-185.865c7.043-7.044,10.567-15.608,10.567-25.693
		C444.819,130.287,441.295,121.629,434.252,114.203z"/>
</svg>
)















export { MenuButton, CloseButton, IconSales, IconHeart, IconDoctor, IconHospital, IconMicroScope, IconPlace,IconTime, IconPrice, IconFilterDoctor, IconArrowDown }