import React from "react";
import { Button } from "react-bootstrap"

function LoginModal() {
    return(
        <div className="modalBackgorund">
            <div clasName="modalContainer">
                <button> X </button>
                <div className="title">
                    <h1>Are you sure you want to continue?</h1>
                </div>
                <div className="body">
                    <p>
                        The next page is awesome! You should move forward
                    </p>
                </div>
                <div className="footer">
                    <Button>Cancel</Button>
                </div>
            </div>
        </div>
    );
}

export default LoginModal;