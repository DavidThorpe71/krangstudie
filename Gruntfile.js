module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'gm',
          sizes: [{
            width: 530,
            suffix: '_large_2x',
            quality: 50
          },
          {
            width: 265,
            suffix: '_large_1x',
            quality: 50 
          }
          // {
          //   width: 520,
          //   suffix: '_sm_2x',
          //   quality: 50 
          // },
          // {
          //   width: 260,
          //   suffix: '_sm_1x',
          //   quality: 50 
          // },
          // {
          //   width: 560,
          //   suffix: '_med_1x',
          //   quality: 50 
          // },
          // {
          //   width: 1120,
          //   suffix: '_med_2x',
          //   quality: 50 
          // }
          ]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png,JPG}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};
