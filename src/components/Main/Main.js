import React from "react";

const contentText = React.createElement('h2', {className: ' my_h2'}, 'Now React-');

class Main extends React.Component {
    render() {
        return (
        <div className="main-site">
            <div>
             {contentText}
            </div>
            
            <p>Создавать интерактивные пользовательские интерфейсы на React — приятно и просто. Вам достаточно описать, как части интерфейса приложения выглядят в разных состояниях. React будет своевременно их обновлять, когда данные изменяются.</p>
            
            <div>{this.props.children}</div>
            
        </div>
        );
    }
}


export default Main;