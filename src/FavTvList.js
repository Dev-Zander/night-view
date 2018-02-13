import React, { Component } from 'react';
import axios from 'axios';

export default class FavTvList extends Component {

    constructor() {
        super()
        this.state = {
            show: []


        }

    }
    handleChange(value){
this.setState({

    show:value
   
})
    }

 
    
    render() {

        let item = this.props.item

        return (


            <div className="FavTvList">

                <p>
                    <input onChange = {e => this.handleChange(e.target.value)}/>
                    {item.show}
                    <button onClick={() => {
                        this.props.updateShowName(this.props.item.id, this.state.show)
                    }}>
                    Update
                    </button>
                    <button onClick={() => {
                        console.log(this)
                        this.props.deleteShow(item.id)
                    }}>Delete</button>
                </p>


            </div>
        )
    }


} 