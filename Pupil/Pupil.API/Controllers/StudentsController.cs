using Newtonsoft.Json.Linq;
using Pupil.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Pupil.API.Controllers
{
    [RoutePrefix("api/students")]
    public class StudentsController : PupilController
    {
        [Route("")]
        public List<Student> GetStudents()
        {
            return Context.Students.ToList();
        }

        [Route("{id:int}")]
        public Student GetStudent(int id)
        {
            return TryGetStudent(id);
        }

        [Route("delete/{id:int}")]
        public void DeleteStudent(int id)
        {
            Context.Students.Remove(TryGetStudent(id));

            Context.SaveChanges();
        }

        [HttpPost]
        [Route("add")]
        public IHttpActionResult AddStudent(JObject jObject)
        {
            Student student = jObject.ToObject<Student>();

            Context.Students.Add(student);

            Context.SaveChanges();

            return Ok();
        }

        [HttpPost]
        [Route("edit")]
        public IHttpActionResult EditStudent(JObject jObject)
        {
            Student student = jObject.ToObject<Student>();

            Context.Students.Attach(student);
            Context.Entry(student).State = EntityState.Modified;

            Context.SaveChanges();

            return Ok();
        }

        private Student TryGetStudent(int id)
        {
            Student returnStudent = Context.Students.FirstOrDefault(x => x.StudentID == id);

            if (returnStudent == null)
                throw new ArgumentException("Student not found!");

            return returnStudent;
        }
    }
}
