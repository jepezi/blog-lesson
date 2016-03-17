import path from 'path';

module.exports = function renderClient(req, res) {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
};
