using System.Web.Mvc;

namespace jsApp.Controllers
{
    public class TemplatesController : Controller
    {
        public ActionResult GetTemplate(string templateId)
        {
           // Response.ContentType = "text/plan";
            return PartialView((object) templateId);
        }

    }
}
