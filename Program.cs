using FutsalAPI.DataContext;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<FutsalDbContext>(o => o.UseSqlServer(builder.Configuration.GetConnectionString("FutsalConnection")));
builder.Services.AddOpenApi();

//services core
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin", policy =>
    {
        policy.WithOrigins("http://localhost:4200") // Specify the allowed origin
              .AllowAnyMethod()                    // Allow all HTTP methods
              .AllowAnyHeader()                    // Allow all headers
              .AllowCredentials();                 // If using cookies/auth tokens
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.MapOpenApi();
}

app.UseHttpsRedirection();
app.UseCors("AllowSpecificOrigin"); // Use the specified CORS policy
app.UseRouting();
app.UseAuthorization();
app.MapControllers();
app.Run();
