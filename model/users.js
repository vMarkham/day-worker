const Model = require('./model.js')(`users`)
const db = require('../database/connection.js')

class usersModel extends Model {
  constructor(){
    super()
  }

  static userName(email){
    return db('users').where({ email })
    .then(result=>result[0])
  }

  static userWithWorkerProfile(userId){
    return db('users')
    .select([
      'users.id',
      'users.name',
      'users.username',
      'users.email',
      'users.zipcode',
      'users.phone',
      // 'users.user_type',
      'worker.id as workerID',
      'worker.availability',
      'worker.total_skills',
      'worker.total_projects as totalProjects',
      'worker.blurb',
      'worker.work_zips as workZips',
      'worker.about_me_paragraph',
      'worker.about_me_interests'
    ])
    .leftJoin('worker_profiles as worker', 'worker.user_ID', 'users.id')
    .where('users.id', '=', userId)
  }

}

usersModel.userWithWorkerProfile(3).then(ret=>{console.log(ret);})

module.exports= usersModel
