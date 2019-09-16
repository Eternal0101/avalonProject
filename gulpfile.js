var gulp = require('gulp'); //  引入 gulp
var less = require('gulp-less'); //编译less
var uglify = require('gulp-uglify'); // 压缩js
var cleanCSS = require('gulp-clean-css');//压缩css文件
var rename = require('gulp-rename');//重命名
var browserSync = require('browser-sync');//浏览器自动刷新页面
var watch = require('gulp-watch');//监听变化
var liveReload = require('gulp-livereload');//热刷新

// 编译less
gulp.task('less', function () {
    return gulp.src('./less/**/*.less')
        .pipe(less())
        .pipe(gulp.dest("./css/"));
});
//压缩css文件
gulp.task('cleanCSS',function(){
   return gulp.src('./css/**/*.css')
       .pipe(cleanCSS())
       .pipe(rename({suffix:'.min'}))/*重命名，添加一个.min的后缀*/
       .pipe(gulp.dest('dist/css/'));
});
//压缩js文件
// gulp.task('js',function(){
//     return gulp.src('./js/**/*.js')
//         .pipe(uglify())
//         .pipe(rename({suffix:'.min'}))/*重命名，添加一个.min的后缀*/
//         .pipe(gulp.dest('dist/js'))
// });
//监听变化
gulp.task('watch', ['less'], function() {
    browserSync.init({
        server: {
            baseDir: "./",
            index: 'index.html'
        }
    });
    gulp.watch('./*.html', ['less','cleanCSS']).on('change', browserSync.reload);
    gulp.watch('views/**/*.html', ['less','cleanCSS']).on('change', browserSync.reload);
    gulp.watch('common/css/*.css', ['less','cleanCSS']).on('change', browserSync.reload);
    gulp.watch('common/js/*.js', ['less','cleanCSS']).on('change', browserSync.reload);
    gulp.watch('less/**/*.less', ['less','cleanCSS']).on('change', browserSync.reload);
    gulp.watch('js/**/*.js', ['less','cleanCSS']).on('change', browserSync.reload);
    gulp.watch('css/**/*.css', ['less','cleanCSS']).on('change', browserSync.reload);
});