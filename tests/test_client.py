import sys
sys.path.append('../')
from app import app

def test_index_route():
    with app.test_client() as client:
        response = client.get('/')
        print(response)
        assert response.status_code == 200
        assert b'Hello World!' in response.data