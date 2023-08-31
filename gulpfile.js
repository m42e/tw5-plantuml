
/********************************************************************
* Imports
*******************************************************************/

var gulp = require("gulp"),
	gutil = require("gulp-util"),
	clean = require('gulp-clean');
	dest = "plugins/m42e/plantuml/";

/********************************************************************
* Tasks
*******************************************************************/

gulp.task("clean", function () {

	//empty target
	return gulp.src(dest, {read: false})
    	.pipe(clean());
});

gulp.task("build", ["clean"], function () {

	// copy non-js
	gulp.src(["src/**", "!**/*.js"])
		.pipe(gulp.dest(dest));

	// uglify js
	gulp.src("src/**/*.js")
		.pipe(gulp.dest(dest));
});

gulp.task("default", ["clean", "build"], function () {
})
