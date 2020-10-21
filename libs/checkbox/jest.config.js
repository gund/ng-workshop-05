module.exports = {
  name: 'checkbox',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/checkbox',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
