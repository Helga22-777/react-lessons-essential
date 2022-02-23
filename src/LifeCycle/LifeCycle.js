import React from "react";

class LifeCycle extends React.Component {
     componentWillMount() {
        alert('Component open');
    }
    componentDidMount(){
        alert('Component mounted');
    }

    componentWillUnmount() {
        alert('Component close');
    }

    render() {
        console.log('render');
        return (
                  <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptates, sint dolor recusandae beatae dignissimos atque ea alias architecto quo impedit numquam. Earum reprehenderit ea vitae officiis voluptate corporis natus?
                  </div>
        )
    }
    
}

export default LifeCycle;