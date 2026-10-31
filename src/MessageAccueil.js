import React,{Component}from "react";

class MessageAccueil extends Component {
    render () {
        return(
            <div>
                <h2> Bienvenue dans notre boutique,{this.props.nomClient} !</h2>
            </div>

        );
    }

}
export default MessageAccueil;