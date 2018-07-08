//gulpfile.js

let gulp = require('gulp');
let ts = require('gulp-typescript');
let tsp = ts.createProject('tsconfig.json'); //使用tsconfig.json文件配置tsc
let exec = require('child_process').exec;
let nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync').create();

let child;
//目录常量
const PATHS = {
  scripts:['./server/**/*.ts'],
  output:'./build',
};
//编译ts文件
gulp.task('build-ts',['nodemon'],function(){
  return gulp.src(PATHS.scripts)
    .pipe(tsp())
    .pipe(gulp.dest(PATHS.output));
});
//监视ts文件变化
gulp.task('watch-ts',['build-ts'],function(){
  gulp.watch(PATHS.scripts,['build-ts']);
});
//自动重启服务器
gulp.task('restart',function(){
  child = exec('nodemon ./build/auction_server.js',(error,stdout,stderr)=>{
    console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
  if (error !== null) {
    console.log(`exec error: ${error}`);
  }
});
});
//开发任务
gulp.task('default',['build-ts','nodemon','watch-ts']);

gulp.task('serve', ['nodemon'], function(){
  browserSync.init({
    proxy: 'http://localhost:3000',
    browser: 'chrome',
    port: 7000
  });

  gulp.watch('public/**/*.+(scss|jade|ls)', ['inject'])
    .on('change', browserSync.reload);
});

gulp.task('browser-sync', ['nodemon'], function() {
  var port = process.env.PORT || 5000;
  browserSync.init(null, {
    proxy: "http://localhost:"+port,
    files: ["/back/public/**/*.*", "/back/views/**/*.*"],
    //browser: "google chrome",
    browser: "chrome",
    //reloadDelay:1000,
    port: 3000
  });
});

gulp.task('nodemon', function (cb) {
  // We use this `called` variable to make sure the callback is only executed once
  var called = false;
  return nodemon({
    script: './build/auction_server.js',
    watch: [ "./build/**/*.*"]
  })
    .once('start', function onStart() {
      if (!called) {
        cb();
      }
      called = true;
    })
    .on('restart', function onRestart() {
      // Also reload the browsers after a slight delay
      setTimeout(function reload() {
        browserSync.reload({
          stream: false
        });
      }, 3000);
    });
});