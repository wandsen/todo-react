
class CreateListTag extends React.Component{
    render(){
        return(
            <li>{this.props.listItem}</li>

        );
    }
}



class List extends React.Component {
  constructor(){
    super()
    this.changeHandler = this.changeHandler.bind( this );
    this.addToList = this.addToList.bind( this );

  }

  state = {
    list : [],
    word : ""
  }

  changeHandler(event){
    this.setState({word:event.target.value});
    console.log("change", event.target.value);
  }

  addToList(){
    const newList = this.state.list.slice()
    newList.push(this.state.word)

    this.setState({list: newList })
    this.setState({word: ""})
  }

  render() {
      // render the list with a map() here

      let toDoList = this.state.list.map( (element, index)=>{

            return <CreateListTag key={index} listItem = {element} />
      })

      console.log(this.state.list)

      console.log("rendering");
      return (
        <div className="list">
          <input onChange={this.changeHandler} value={this.state.word}/>
          <button onClick = {this.addToList}>add item</button>

          <ul>
            {toDoList}
          </ul>


        </div>
      );
  }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);

