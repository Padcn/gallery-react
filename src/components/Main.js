require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');
//获取图片信息
var imageDatas=require('../data/imageDatas.json');
//转换图片信息转换成图片URL路径信息
imageDatas=(function (imageDatasArr){
  for(var i=0,j=imageDatasArr.length;i<j;i++){
    var singleImageData=imageDatasArr[i];
    singleImageData.imageURL=require('../images/'+singleImageData.fileName);

    imageDatasArr[i]=singleImageData;
  }

  return imageDatasArr;
})(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">
          <nav className="controller-nav">
            ssss
          </nav>
        </section>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
