
    using Newtonsoft.Json;
    using System.ComponentModel.DataAnnotations.Schema;
    namespace Web.data
    {
    [Table(" User")]
    public class Data
    {
        public int Id { get; set; }
        [JsonProperty("Account")]
        public string? account { get; set; }
        [JsonProperty("Password")]
        public string? password { get; set; }
    }
public class Data1
{
    public int Id { get; set; }
        [JsonProperty("Account1")]
        public string? Account1 { get; set; }
}



    }

