var Album = React.createClass(
  {
    next(){
      this.state.hinh = parseInt(this.state.hinh) + 1;
      this.setState(this.state);
    },
    prev(){
      this.state.hinh = parseInt(this.state.hinh) - 1;
      this.setState(this.state);
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
