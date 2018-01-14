using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pupil.Entities
{
    public partial class PupilEntities : DbContext
    {
        public PupilEntities(string connectionString)
            : base(connectionString)
        {
        }
    }
}
