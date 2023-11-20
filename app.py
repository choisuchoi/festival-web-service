import db
from flask import Flask, request, render_template, redirect, url_for, send_file

app = Flask(__name__)
app.secret_key = "software"


#load main page data
#id, x, y 데이터 만을 리턴한다.
@app.route('/api')
def home():
    festival_info = festival_db.get_all_festival_info()
    total_list = list()
    for i, item in enumerate(festival_info):
        data_dict = { 'id' :item[0]}
        place_list = {'x': item[1], 'y' : item[2]}
        data_dict['location'] = place_list
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
        return festival_info

#search festival info 
# 특정 검색 인덱스를 통하여 DB에서 검색을 실시해서 해당 결과에 맞는 축제들을 return한다.
@app.route('/api/get_festival', methods = ['POST'])
def search_festival():
    if request.method == 'POST' :
        location = request.form['location']
        month = request.form['month']
        # ~~~ 아래 나열해서 값 가져오기
        festival_list = festival_db.search_festival_list(location, month)

#imagetest
@app.route('/api/image/<image_name>')
def open_image(image_name):
    image_path = image_name + ".png"

    return send_file(image_path)

if __name__ == "__main__":
    #connection DB
    db_host = 'localhost'
    db_user = 'festival_admin'
    db_pw ='1234'
    festival_db = db.DB(db_host,db_user,db_pw)
    #start web
    app.run(host = '0.0.0.0', port = 1235, debug=True)
