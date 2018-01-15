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
        public PupilEntities Context => new PupilEntities(Connections.PupilConnection);

        public PupilController()
        {

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