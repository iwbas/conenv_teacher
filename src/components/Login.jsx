import './Login.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Login({}) {
    return (
        <div className="d-flex align-items-center flex-column justify-content-center vh-100 bg-dark">
            <Card className="p-4">
                <h3 className="text-center mb-3">Вход в систему</h3>
                <Form>
                    <Form.Group controlId="login">
                        <Form.Label>Логин</Form.Label>
                        <Form.Control type="text" placeholder="Введите логин" />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Введите пароль"
                        />
                    </Form.Group>
                    {/* <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Запомнить меня" />
                    </Form.Group> */}
                    <Button className="w-100 mb-2" variant="primary" type="submit">
                        Войти
                    </Button>
                    <p className="small text-center mb-0">
                        <a className="text-primary">
                            Восстановить пароль
                        </a>{' '}
                        или{' '}
                        <a className="text-primary">зарегистрироваться</a>
                    </p>
                </Form>
            </Card>
        </div>
    );
}

export default Login;
