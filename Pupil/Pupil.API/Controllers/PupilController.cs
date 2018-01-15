using Pupil.API.Settings;
using Pupil.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace Pupil.API.Controllers
{
    public class PupilController : ApiController, IDisposable
    {
        private PupilEntities _context;
        public PupilEntities Context => _context;

        public PupilController()
        {
            _context = new PupilEntities(Connections.PupilConnection);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing && Context != null)
                    Context.Dispose();
            
            // Call base class implementation.
            base.Dispose(disposing);
        }
    }
}