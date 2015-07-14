//����������� ������� ������ � nodejs
module.exports = function(grunt) {
  // ������������� ������� GruntJS
  grunt.initConfig({

    //��������� ��������� ������� GruntJS, �� ����� �������������� ���������� ����� �������� ������� npm, ��� �������� � ���� package.json ����� �������� npm install

    //�������� �������� ���� javascript � ������� ������� jshint
    jshint: {},

    //���������� ������
    concat: {}

    //� ��� �����
  });

  //�������� �������, ������� �������������� �����������
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');

  //��� ������� ����� ���������� ����� �� ����� �� � ������� ����������� grunt, � ������� Enter
  grunt.registerTask('default', ['jshint', 'concat']);
};