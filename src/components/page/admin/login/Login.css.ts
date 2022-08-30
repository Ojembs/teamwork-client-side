import styled from 'styled-components';

const style = () => styled.div`
    .form-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top: 7%;

        .right {
            margin: 200px 100px;

            .form {

                .form-header {
                    color: #706f70;
                }

                input {
                    border: none;
                    color: #706f70;
                    padding: 15px 20px;
                    margin-bottom: 20px;
                    display: block;
                    width: 500px;;
                    background: #efefef;
                    border-radius: 5px;
                    outline: none;
                    font-weight: 600;
                }

                input::placeholder {
                    color: #706f70;
                    font-weight: 600;
                }

                .error-message {
                    margin-top: 10px;
                    color: red;
                }
            }

            .btn-container{
                display: flex;
                align-items: center;
                gap: 10px;

                img {
                    width: 40px;
                    //height: 30px;
                    //border: 1px solid #6f65e7;
                    box-shadow: 0px 3px 8px 6px rgba(0, 0, 0, 0.1);
                    border-radius: 5px;
                    padding: 2px;
                    cursor: pointer;
                }
            }
        }

        .left {
            margin: 0 auto;

            img {
                width: 700px;
            }
        }
    }

`

export default style