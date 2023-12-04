import db
from flask import Flask, request, render_template, redirect, url_for, send_file, jsonify

app = Flask(__name__)
app.secret_key = "software"
app.config['JSON_AS_ASCII'] = False

#load main page data
#id, x, y 데이터 만을 리턴한다.
@app.route('/api')
def home():
    festival_info = festival_db.get_all_festival_info()
    total_list = list()
    for i, item in enumerate(festival_info):
        #data_dict = { 'id' :item[0]}
        #place_list = {'x': item[2], 'y' : item[1]}
        #data_dict['location'] = place_list
        data_dict = {'id' : item[0], 'name' : item[1], 'address' : item[2], 'x' : item[4], 'y' : item[3], 'place_n' : item[5], 'begin_date' : item[6], 'end_date' : item[7], 'detail' : item[8]}
        total_list.append(data_dict)
    return total_list

#click p-point
@app.route('/api/get_festival', methods=['GET','POST'])
def get_festival_data():
    """
    최수현이 보낸 정보로 검색할거임
    """
    if request.method == 'POST' : 
        id = request.form['id']
        festival_info = festival_db.get_festival_info(id)
        total_list = list()
        for i, item in enumerate(festival_info) :
            data_dict = {'id' : item[0], 'name' : item[1], 'address' : item[2], 'x' : item[4], 'y' : item[3], 'place_n' : item[5], 'begin_date' : item[6], 'end_date' : item[7], 'detail' : item[8]}
            total_list.append(data_dict)
        return festival_info

#search festival info 
# 특정 검색 인덱스를 통하여 DB에서 검색을 실시해서 해당 결과에 맞는 축제들을 return한다.
@app.route('/api/search_festival', methods = ['POST'])
def search_festival():
    if request.method == 'POST' :
        location = request.form['location']
        month = request.form['month']
        festival_list = festival_db.search_festival_info(location, month)
        total_list = list()
        for i, item in enumerate(festival_list) :
            data_dict = {'id' : item[0], 'name' : item[1], 'address' : item[2], 'x' : item[4], 'y' : item[3], 'place_n' : item[5], 'begin_date' : item[6], 'end_date' : item[7], 'detail' : item[8]}
            total_list.append(data_dict)
        return total_list


@app.route('/api/test')
def test_festival():
    festival_list = festival_db.search_festival_info('창원', '4')
    total_list = list()
    for i, item in enumerate(festival_list) :
        data_dict = {'id' : item[0], 'name' : item[1], 'address' : item[2], 'x' : item[4], 'y' : item[3], 'place_n' : item[5], 'begin_date' : item[6], 'end_date' : item[7], 'detail' : item[8]}
        total_list.append(data_dict)
    print(total_list)
    return jsonify(total_list)


#imagetest
@app.route('/api/image/<image_name>')
def open_image(image_name):
    image_path = "image/" +image_name + ".jpg"

    return send_file(image_path)

if __name__ == "__main__":
    #connection DB
    db_host = 'localhost'
    db_user = 'festival_admin'
    db_pw ='1234'
    festival_db = db.DB(db_host,db_user,db_pw)
    #start web
    app.run(host = '0.0.0.0', port = 1235, debug=True)
