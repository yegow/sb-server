import { task, src, dest, series } from 'gulp';

task('build.copy.assets', () => {
    return src(['./**/*', '!./**/*.ts', '!node_modules', '!coverage'])
        .pipe(dest('build'));
});

task('default', series('build.copy.assets'));