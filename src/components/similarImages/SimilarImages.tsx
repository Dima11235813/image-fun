import React from "react";
import "./SimilarImages.css";

const imageStyle = {
  maxWidth: "25vw"
};

class SimilarImages extends React.Component {
  state = {
    picData: [],
    urlToFindRelatedFor: ""
  };
  componentDidMount() {
    //fetch(`https://i.picsum.photos/id/${Math.floor(Math.random() * 100)}/205/300.jpg`)
    fetch(`https://picsum.photos/v2/list`)
      .then(data => data.json())
      .then(data => {
        this.setState({ picData: data }, this.getRelatedImages);
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
    let googleSimilarImageUrl = this.getRelatedImageUrl(item);
    fetch(googleSimilarImageUrl)
      .then(htmlContent => {
        console.log(htmlContent);
      })
      .catch(err => console.log(err));
    // this.setState({ urlToFindRelatedFor: item.download_url });
  };
  getRelatedImageUrl = (item: any) => {
    return `
    https://www.google.com/searchbyimage?site=search&sa=X&image_url=${item.download_url}
    `;
  };
  render() {
    let imageSource, relatedImageUrl;
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
          <div className="image-caption">
            <a
              className="link-for-image"
              target="_blank"
              href={this.getRelatedImageUrl(item)}
            >
              Similar Images
            </a>
            <span className="author-for-image">Author: {item.author}</span>
          </div>
        </div>
      ));
    }
    // if (this.state.urlToFindRelatedFor !== "") {
    //   let urlForSimilarGoogleImages = this.getRelatedImageUrl();
    //   relatedImageUrl = (
    //     <a href={urlForSimilarGoogleImages} target="_blank">
    //       These are the similar images you're looking for!
    //     </a>
    //   );
    // } else {
    //   relatedImageUrl = <div> Nothing Here! </div>;
    // }
    return (
      <div className="App">
        <div id="images-source">{imageSource}</div>
        <div id="images-for-google">{relatedImageUrl}</div>
      </div>
    );
  }
}

export default SimilarImages;
