import React, { Component } from 'react';

 class Count  extends Component { 
    state = {
      count: 0,
      imageUrl:'https://picsum.photos/200',
      // tags: ['tag1' , 'tag2', 'tag3'],
      // tags: [],

    };

    // styles = {
    //    fontSize:50,
    //    fontWeight:"bold"
    // }

    // randerTags(){
    //    if(this.state.tags.length ===0) return <p>There are no tags!</p>

    //    return  <ul>
    //    {this.state.tags.map(tag => <li key={tag} >{tag}</li>)}
    // </ul>
    // }

    // constructor(){
    //   super();
    //   this.handleIncrement = this.handleIncrement.bind(this)
    // }

    handleIncrement = (product) =>{
        console.log(product)
      // this.state.count++
      this.setState({ count: this.state.count +1})
      // console.log('Increment Clicked', this);
      //obj.method();
      //function();
    };

    // doHandleIncrement = ()=>{
    //     this.handleIncrement({id: 1});
    // };

    render() { 
      return (
        <div>
          {/* <img src={this.state.imageUrl}/> */}
          {/* <span className={this.getBadgeClasses()}>{this.formatCount()}</span>  */}
           {/* <button className='btn btn-secondary btn-sm'>Increment</button> */}
           {/* <button onClick={() => this.handleIncrement("product")} className='btn btn-secondary btn-sm'>Increment</button> */}
           {/* <ul>
              {this.state.tags.map(tag => <li key={tag} >{tag}</li>)}
           </ul> */}
           {/* {this.state.tags.length === 0 && 'please create a new tag!'}
           {this.randerTags()} */}
        </div>
      ); 
}

// getBadgeClasses(){
//   let classes = "badge m-2 badge-";
//   classes += this.state.count === 0 ?
//   "warning": "primary";
// }
  formatCount(){
    // const { count } = this.state
    // return count === 0 ? 'Zero':count;
  }
}
export default Count;