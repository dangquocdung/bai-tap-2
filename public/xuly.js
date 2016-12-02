var Album = React.createClass(
  {
    next(){

      this.setState(hinh: this.state.hinh == 25?25:this.state.hinh + 1);
    },
    prev(){
      this.setState(hinh: this.state.hinh == 1?1:this.state.hinh - 1);
    },
    getInitialState(){
      return {hinh: 1};
    },
    render:function(){
      return(
        <div className="div-album">

          <button onClick={this.next}>Tiep theo</button>
          <button onClick={this.prev}>Quay lai</button>

          <hr />
          <img src={"./images/" + this.state.hinh + ".jpg"} />

        </div>
      )
    }

  }
);
ReactDOM.render(

  <Album />



  , document.getElementById("root")
);
