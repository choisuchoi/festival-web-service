import pymysql

class DB :
    def __init__(self, host, user, pw):
        self.host = host
        self.user = user
        self.pw = pw

    def get_all_festival_info(self):
        conn = pymysql.connect(host=self.host ,port=3306, user=self.user ,password=self.pw, database='festival')
        cur = conn.cursor()
        sql = 'select id, x, y from fastival_list'
        cur.execute(sql)
        all_festival_info = [list(item) for item in cur.fetchall()]
        conn.close()
        return all_festival_info

    def get_festival_info(self, id):
        conn = pymysql.connect(host=self.host ,port=3306, user=self.user ,password=self.pw, database='festival')
        cur = conn.cursor()
        sql = 'select * from fastival_list where id = %s'
        cur.execute(sql,(id))
        festival_info = [list(item) for item in cur.fetchall()]
        festival_info = festival_info[0]
        conn.close()
        return festival_info
    
    def search_festival_info(self, location, month):
        conn = pymysql.connect(host=self.host ,port=3306, user=self.user ,password=self.pw, database='festival')
        cur = conn.cursor()
        if location == '' and month == '' : 
            sql = 'select * from fastival_list'
            cur.execute(sql)
        elif location == '' : 
            sql = 'select * from fastival_list where month(begin_date) = %s'
           
            cur.execute(sql,(month))
        elif month == '' : 
            sql = 'select * from fastival_list where address like %s'
            location = '%' + location + '%'
            print(location)
            cur.execute(sql,(location,))
            
        else : 
            sql = "select * from fastival_list where address like %s and month(begin_date) = %s"
            location = '%' + location + '%'
            cur.execute(sql,(location, month))


        festival_info = [list(item) for item in cur.fetchall()]
        conn.close()
        return festival_info    


    
if __name__ == "__main__" : 

    host = 'localhost'
    user = 'festival_admin'
    pw ='1234'
    

    test = DB(host,user,pw)
    #test.search_festival_info('창원','4')
    #print(test.get_festival_info('ID064001'))
