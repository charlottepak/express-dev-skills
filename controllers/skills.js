const Skill = require('../models/skill');

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
  edit,
  update
};

function update(req, res) {
  // If checked req.body.done = 'on'
  // If not checked req.body.done = undefined
  req.body.done = !!req.body.done;
  // req.body.done = req.body.done === 'on';
  Skill.update(req.params.id, req.body);
  res.redirect(`/skills/${req.params.id}`);
}

function edit(req, res) {
  // Retrieve the skill being edited
  const skill = Skill.getOne(req.params.id);
  res.render('skills/edit', {skill});
}

function deleteSkill(req, res) {
  // The model is responsible for deleting the skill
  Skill.deleteOne(req.params.id);
  res.redirect('/skills');
}

function create(req, res) {
  console.log(req.body);
  // The model is responsible for creating data
  Skill.create(req.body);
  // Do a redirect anytime data is changed
  res.redirect('/skills');
}

function newSkill(req, res) {
  res.render('skills/new.ejs');
}

function index(req, res) {
  res.render('skills/index', {
    skills: Skill.getAll(),
    time: req.time
  });
}

function show(req, res) {
  res.render('skills/show', {
    skill: Skill.getOne(req.params.id),
    // Would like to display the number of the skills within the list
    skillNum: Skill.getAll().findIndex(skill => skill.id === parseInt(req.params.id)) + 1
  });
}
