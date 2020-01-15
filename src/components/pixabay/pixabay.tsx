import React from "react";
import "./SimilarImages.css";
import { PixabayRequestParams } from "../../models/pixabayRequestParams";

const imageStyle = {
  maxWidth: "25vw"
};

class PixabayImages extends React.Component {
  state = {
    picData: [],
    input: ""
  };
  componentDidMount() {
    let urlForPixabay = `${process.env.REACT_APP_PIXABAY_url}`;
    // let pixabayRequestBody: PixabayRequestParams = {
    let pixabayRequestBody: RequestInit = {
      body: JSON.stringify({
        q: "search by numbers",
        key: process.env.REACT_APP_PIXABAY_KEY
      })
    };
    fetch(`https://picsum.photos/v2/list`, pixabayRequestBody)
      .then(data => data.json())
      .then(data => {
        this.setState({ picData: data });
        console.log(data);
      })
      .catch(err => console.log(err));
  }
  getRelatedImages = () => {
    // let googleImageService = `https://www.google.com/searchbyimage?site=search&sa=X&image_url=YOUR_IMAGE_URL`
    // let googleImageService = `https://www.google.com/searchbyimage?site=search&sa=X&image_url=https://i.picsum.photos/id/1000/5626/3635.jpg`
  };
  clickSourceImage = (item: any) => {
    console.log("Image clicked - get related now!");
    console.log(item);
  };
  handleInputChange = (e: any) => {
    this.setState({ input: e.target.value });
  };
  render() {
    let imageSource;
    if (this.state.picData.length > 0) {
      imageSource = this.state.picData.map((item: any) => (
        <div key={`item${item.id}`}>
          <img
            className="image-source-item"
            style={imageStyle}
            src={item.download_url}
            onClick={() => {
              this.clickSourceImage(item);
            }}
          ></img>
          <div className="image-caption"></div>
        </div>
      ));
    }
    return (
      <div className="App">
        <div id="input-container">
          <input value={this.state.input} onChange={this.handleInputChange}>
            {" "}
          </input>
        </div>
        <div id="images-source">{imageSource}</div>
      </div>
    );
  }
}

export default PixabayImages;
