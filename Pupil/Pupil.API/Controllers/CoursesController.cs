using Pupil.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace Pupil.API.Controllers
{
    [RoutePrefix("api/courses")]
    public class CoursesController : PupilController
    {
        [Route("")]
        public List<Course> GetCourses()
        {
            return Context.Courses.ToList();
        }

        [Route("{id:int}")]
        public Course GetCourse(int id)
        {
            return TryGetCourse(id);
        }

        [Route("delete/{id:int}")]
        public void DeleteCourse(int id)
        {
            Context.Courses.Remove(TryGetCourse(id));

            Context.SaveChanges();
        }

        private Course TryGetCourse(int id)
        {
            Course returnCourse = Context.Courses.FirstOrDefault(x => x.CourseID == id);

            if (returnCourse == null)
                throw new ArgumentException("Course not found!");

            return returnCourse;
        }
    }
}