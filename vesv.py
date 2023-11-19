from flask import Flask, request, jsonify

app = Flask(__name__)

# Replace this with your actual PIN
correct_pin = "6130"
update_pin_value = "7073"

@app.route('/check_pin', methods=['POST'])
def check_pin():
    data = request.get_json()

    if 'pin' not in data:
        return jsonify({"error": "Pin not provided"}), 400

    user_pin = data['pin']

    if user_pin == correct_pin:
        return jsonify({"result": True})
    else:
        return jsonify({"result": False})
    
@app.route('/update_pin', methods=['POST'])
def update_pin_route():
    data = request.get_json()

    if 'pin' not in data:
        return jsonify({"error": "Pin not provided"}), 400

    user_pin = data['pin']

    if user_pin == update_pin_value:
        return jsonify({"result": True})
    else:
        return jsonify({"result": False})

if __name__ == '__main__':
    app.run(debug=True)
