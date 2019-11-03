"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gulp_1 = require("gulp");
gulp_1.task('build.copy.assets', function () {
    return gulp_1.src(['./**/*', '!./**/*.ts', '!node_modules', '!coverage'])
        .pipe(gulp_1.dest('build'));
});
gulp_1.task('default', gulp_1.series('build.copy.assets'));
//# sourceMappingURL=gulpfile.js.map