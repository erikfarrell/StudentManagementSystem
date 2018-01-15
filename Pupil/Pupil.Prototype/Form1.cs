using Pupil.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Pupil.Prototype
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void btnTest_Click(object sender, EventArgs e)
        {
            var conn = String.Format(Properties.Settings.Default.PupilEntityFramework, Properties.Settings.Default.DesktopPupilConnection);

            using (var db = new PupilEntities(String.Format(Properties.Settings.Default.PupilEntityFramework, Properties.Settings.Default.DesktopPupilConnection)))
            {
                foreach(Course course in db.Courses)
                {
                    db.Courses.Remove(course);
                }

                db.SaveChanges();

                Course course1 = new Course{ CourseNumber = "CS-200", Title = "Introduction to Java", Capacity = 35, DateCreated = DateTime.Now, DateModified = DateTime.Now, IsActive = true };

                db.Courses.Add(course1);

                db.SaveChanges();
            }
        }
    }
}
