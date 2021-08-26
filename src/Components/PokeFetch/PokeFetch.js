import React, { Component } from 'react'
import './PokeFetch.css';



class PokeFetch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokeInfo: '',
      pokeSprite: '',
      pokeName: '',
    }
  }

  fetchPokemon() {
    let min = Math.ceil(1);
    let max = Math.floor(152);
    let pokeNum = Math.floor(Math.random() * (max - min) + min);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNum}`, {
      method: 'GET'
    }).then(res => res.json())
      .then(res => {
        this.setState({
          pokeInfo: res,
          pokeSprite: res.sprites.front_default,
          pokeName: res.species.name,
        })
      })
      .catch((err) => console.log(err))
  }

  render() {
    return (
      <div className={'wrapper'}>
        <button className={'start'} onClick={() => this.fetchPokemon()}>Start!</button>
        <Timer />
        <div className={'pokeWrap'}>
          <img className={'pokeImg'} src={this.state.pokeSprite} />
          <h1 className={'pokeName'}>{this.state.pokeName}</h1>
        </div>
      </div>
    )
  }
}

class Timer extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          count: 10 
      }
      this.handleClick = this.handleClick.bind(this);    
  }

  handleClick(){
    this.setState(prevState => ({
      //Need to figure out 
    }))
  }



  render() {
      const {count} = this.state
      return(
          <div>
              <h1 className={'timer'}>Timer Display: {count}</h1>
              <button onClick={this.handleClick}>Start timer</button>
          </div>
      )
  }

  componentDidMount () {
      this.myInterval = setInterval(()=> {
          this.setState({
              count: this.state.count - 1 
          })
      }, 1000)
      
  }

  componentWillUnmount () {
      clearInterval(this.myInterval)
  }
}

export default PokeFetch;