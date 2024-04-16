const infoInsert={
    inquiryF: (body, file, fileValidation)=>{
        if(fileValidation){
            msg= fileValidation
            url="/info/inquiry_form"
            return common.getMessage(msg, url)
        }
        console.log("file : ", file)
        if(file !== undefined){
            body.origin_file_name = file.originalname;
            body.change_file_name = file.filename
        }
        console.log("body : ", body)
        const result= dao.infoInsert.inquiryF(body)
        if(result.rowsAffected === 1){
            msg="등록되었습니다!"
            url="/info/inquiry"
        }else{
            msg="문제발생!"
            url="/info/inquiry_form"
        }
        return common.getMessage(msg, url)
    }
}

module.exports={infoInsert}