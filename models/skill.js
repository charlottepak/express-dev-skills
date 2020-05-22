const skills = [
    {id: 125223, skill: 'HTML', done: false},
    {id: 127904, skill: 'CSS', done: false},
    {id: 139608, skill: 'JavaScript', done: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };
  
  function update(id, skill) {
    const skillObj = skills.find(s => s.id === parseInt(id));
    Object.assign(skillObj, skill);
  }
  
  function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }
  
  function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
  }
  
  function getOne(id) {
    // Use the Array.prototype.find iterator method
    return skills.find(skill => skill.id === parseInt(id));
  }

  function getAll() {
    return skills;
  }
