import React from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import './App.css';





class App extends React.Component{
    
    constructor() {
        super()
        this.state = {
              robots: [],
              searchfield:''

        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users").then(response => {
          return  response.json();
        })
            .then(users => {
            this.setState({robots:users});
        })
        
    }
    onSearchChange = (event) => {
        this.setState({searchfield:event.target.value})
           
    }
    render() {
        const { robots, searchfield } = this.state;
        const filterRobots = robots.filter(robot => {
            return robot.name?.toLowerCase().includes(searchfield?.toLowerCase());
        })
        return !robots.length?
             <h1>Loading</h1> :          
        
    
            
             (
            <div className='tc'>
                <h1 className='f1'>Robo Friends</h1>
                     <SearchBox onSearchChange={this.onSearchChange} />
                     <Scroll>
                         <CardList robots={filterRobots} />
                        </Scroll>
            </div>
        );
        
       
       
    }
}



export default App;